import { NextResponse } from 'next/server'
import { spawn } from 'child_process'
import path from 'path'

// Path to Python venv with pyswisseph installed
const PYTHON_PATH = '/Users/saitamadiba/Documents/Astro/vedic_astro_venv/bin/python'
const SCRIPT_PATH = path.join(process.cwd(), 'scripts', 'calculate_ascendant.py')

interface CalculationRequest {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second?: number
  latitude: number
  longitude: number
  timezone: number
}

interface AscendantResult {
  julian_day: number
  ayanamsa: number
  ayanamsa_dms: string
  tropical: {
    longitude: number
    sign: string
    sign_index: number
    degree_in_sign: number
    degree_dms: string
    nakshatra: string
    nakshatra_pada: number
  }
  sidereal: {
    longitude: number
    sign: string
    sign_index: number
    degree_in_sign: number
    degree_dms: string
    nakshatra: string
    nakshatra_pada: number
  }
}

async function runPythonCalculation(params: CalculationRequest): Promise<AscendantResult> {
  return new Promise((resolve, reject) => {
    const inputJson = JSON.stringify(params)

    const process = spawn(PYTHON_PATH, [SCRIPT_PATH, inputJson])

    let stdout = ''
    let stderr = ''

    process.stdout.on('data', (data) => {
      stdout += data.toString()
    })

    process.stderr.on('data', (data) => {
      stderr += data.toString()
    })

    process.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Python process exited with code ${code}: ${stderr}`))
        return
      }

      try {
        const result = JSON.parse(stdout)
        if (result.error) {
          reject(new Error(result.error))
        } else {
          resolve(result)
        }
      } catch {
        reject(new Error(`Failed to parse Python output: ${stdout}`))
      }
    })

    process.on('error', (err) => {
      reject(new Error(`Failed to start Python process: ${err.message}`))
    })

    // Set a timeout
    setTimeout(() => {
      process.kill()
      reject(new Error('Python calculation timed out'))
    }, 10000)
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { year, month, day, hour, minute, second, latitude, longitude, timezone } = body

    // Validate required fields
    if (
      year === undefined ||
      month === undefined ||
      day === undefined ||
      hour === undefined ||
      minute === undefined ||
      latitude === undefined ||
      longitude === undefined ||
      timezone === undefined
    ) {
      return NextResponse.json(
        { error: 'Missing required fields: year, month, day, hour, minute, latitude, longitude, timezone' },
        { status: 400 }
      )
    }

    const result = await runPythonCalculation({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour: parseInt(hour),
      minute: parseInt(minute),
      second: second ? parseInt(second) : 0,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      timezone: parseFloat(timezone),
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Ascendant calculation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Calculation failed' },
      { status: 500 }
    )
  }
}

// Also support GET for simple testing
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const year = searchParams.get('year')
  const month = searchParams.get('month')
  const day = searchParams.get('day')
  const hour = searchParams.get('hour')
  const minute = searchParams.get('minute')
  const second = searchParams.get('second')
  const latitude = searchParams.get('latitude')
  const longitude = searchParams.get('longitude')
  const timezone = searchParams.get('timezone')

  if (!year || !month || !day || !hour || !minute || !latitude || !longitude || !timezone) {
    return NextResponse.json(
      { error: 'Missing required query parameters' },
      { status: 400 }
    )
  }

  try {
    const result = await runPythonCalculation({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour: parseInt(hour),
      minute: parseInt(minute),
      second: second ? parseInt(second) : 0,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      timezone: parseFloat(timezone),
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Ascendant calculation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Calculation failed' },
      { status: 500 }
    )
  }
}
