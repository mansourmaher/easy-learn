"use server"


export async function getReportById(id:string)
{
    
        const report = await prisma.report.findUnique({
            where:{
                id:id
            },
            select:{
                grade:true,
                note:true,
            }
        })
        return report


}