export interface RequestMicroLoan {
    code: string
    amount: number
    companyId: string
    constructionId: string
    promissoryDetail: string[]
    description: string
    bankAccount: string
}