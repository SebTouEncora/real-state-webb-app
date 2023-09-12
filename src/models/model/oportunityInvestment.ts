export interface RequestOportunityInvestment {
    status: string
    code: string
    minimunInvestment: number
    risk: string
    microLoanCode: string
}


export interface OportunityInvestmentResponse {
    response: OportunityInvestment[]
}

export interface OportunityInvestment {
    amount: Amount
    code: string
    doctype: string
    investors: any[]
    microLoanCode: string
    minimunInvestment: string
    risk?: string
    status: string
}

 interface Amount {
    actualRequired: any
    microLoan: any
}