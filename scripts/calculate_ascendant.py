#!/usr/bin/env python3
"""
Ascendant Calculator using Swiss Ephemeris
This script calculates both tropical and sidereal ascendants with accurate precision.
Uses the same calculation method as the Shubham Method.
"""

import json
import sys
import swisseph as swe

SIGN_NAMES = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
              'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

NAKSHATRA_NAMES = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
    'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
    'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishtha', 'Shatabhisha',
    'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
]


def degrees_to_dms(degrees: float) -> str:
    """Convert decimal degrees to degrees, minutes, seconds string"""
    d = int(degrees)
    m = int((degrees - d) * 60)
    s = int(((degrees - d) * 60 - m) * 60)
    return f"{d}°{m:02}'{s:02}\""


def get_nakshatra(longitude: float) -> dict:
    """Get nakshatra information for a given sidereal longitude"""
    nakshatra_span = 360 / 27  # 13°20' per nakshatra
    nakshatra_index = int(longitude / nakshatra_span) % 27
    pada = int((longitude % nakshatra_span) / (nakshatra_span / 4)) + 1

    return {
        'name': NAKSHATRA_NAMES[nakshatra_index],
        'index': nakshatra_index + 1,
        'pada': pada,
        'degree_in_nakshatra': longitude % nakshatra_span
    }


def calculate_ascendant(
    year: int, month: int, day: int,
    hour: int, minute: int, second: int,
    latitude: float, longitude: float,
    timezone: float
) -> dict:
    """
    Calculate both tropical and sidereal ascendants using Swiss Ephemeris.

    Args:
        year, month, day: Birth date
        hour, minute, second: Birth time (local)
        latitude, longitude: Birth place coordinates
        timezone: Timezone offset from UTC (e.g., 5.5 for IST)

    Returns:
        dict with tropical and sidereal ascendant data
    """
    # Convert local time to UT
    ut = hour + minute/60 + second/3600 - timezone

    # Handle day overflow/underflow
    if ut < 0:
        ut += 24
        day -= 1
    elif ut >= 24:
        ut -= 24
        day += 1

    # Calculate Julian Day
    jd = swe.julday(year, month, day, ut)

    # Calculate TROPICAL ascendant (no ayanamsa)
    cusps_tropical, ascmc_tropical = swe.houses(jd, latitude, longitude, b'P')
    tropical_asc = ascmc_tropical[0]

    tropical_sign_index = int(tropical_asc / 30)
    tropical_degree_in_sign = tropical_asc % 30

    # Calculate SIDEREAL ascendant (Lahiri ayanamsa)
    swe.set_sid_mode(swe.SIDM_LAHIRI)
    cusps_sidereal, ascmc_sidereal = swe.houses_ex(jd, latitude, longitude, b'P', swe.FLG_SIDEREAL)
    sidereal_asc = ascmc_sidereal[0]

    sidereal_sign_index = int(sidereal_asc / 30)
    sidereal_degree_in_sign = sidereal_asc % 30

    # Get ayanamsa value
    ayanamsa = swe.get_ayanamsa(jd)

    # Get nakshatra for sidereal
    sidereal_nakshatra = get_nakshatra(sidereal_asc)

    # For tropical nakshatra (conceptual - not traditionally used)
    # We still calculate it for display purposes
    tropical_nakshatra = get_nakshatra(tropical_asc)

    return {
        'julian_day': round(jd, 6),
        'ayanamsa': round(ayanamsa, 6),
        'ayanamsa_dms': degrees_to_dms(ayanamsa),
        'tropical': {
            'longitude': round(tropical_asc, 4),
            'sign': SIGN_NAMES[tropical_sign_index],
            'sign_index': tropical_sign_index,
            'degree_in_sign': round(tropical_degree_in_sign, 4),
            'degree_dms': degrees_to_dms(tropical_degree_in_sign),
            'nakshatra': tropical_nakshatra['name'],
            'nakshatra_pada': tropical_nakshatra['pada']
        },
        'sidereal': {
            'longitude': round(sidereal_asc, 4),
            'sign': SIGN_NAMES[sidereal_sign_index],
            'sign_index': sidereal_sign_index,
            'degree_in_sign': round(sidereal_degree_in_sign, 4),
            'degree_dms': degrees_to_dms(sidereal_degree_in_sign),
            'nakshatra': sidereal_nakshatra['name'],
            'nakshatra_pada': sidereal_nakshatra['pada']
        }
    }


def main():
    """Main function - reads arguments from command line or stdin"""
    if len(sys.argv) > 1:
        # Read from command line arguments as JSON
        try:
            args = json.loads(sys.argv[1])
        except json.JSONDecodeError:
            print(json.dumps({'error': 'Invalid JSON input'}))
            sys.exit(1)
    else:
        # Read from stdin
        try:
            args = json.loads(sys.stdin.read())
        except json.JSONDecodeError:
            print(json.dumps({'error': 'Invalid JSON input from stdin'}))
            sys.exit(1)

    try:
        result = calculate_ascendant(
            year=args['year'],
            month=args['month'],
            day=args['day'],
            hour=args['hour'],
            minute=args['minute'],
            second=args.get('second', 0),
            latitude=args['latitude'],
            longitude=args['longitude'],
            timezone=args['timezone']
        )
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)


if __name__ == '__main__':
    main()
