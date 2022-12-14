import moment, { Moment } from "moment";

export const rules = {
    required: (message = "Field is required") => ({
         required: true, message
    }),
    noPassedDate: (message: string) => () => ({
        validator(_: any, value: Moment){
            if(value.isSameOrAfter(moment())){
                return Promise.resolve()
            }
            return Promise.reject(new Error(message))
        }
    })
}