export interface BuildingRecord {
  response: Response<Building>[]
}

export interface Response <T> {
    Key: string
    Record: T
}

export interface Building {
    companyId: string
    docType: string
    projectStatus: string
    value: Value
    certified: boolean
    id: string
    location: Location
    area: Area
}

export interface Value {
    currency: string
    price?: number
    amount: number
}

export interface Location {
    latitude: string
    longitude: string
}

export interface Area{
    landArea: string
    buildArea: string
}