import { StepResponse } from "../../dto/response/step.response";
import StepDescription from "./step-description.entity";
import StepOrder from "./step-order.entity";
import Step from "./step.entity";

export const StepFactory = {
    create: (step: StepResponse): Step | undefined => {
        const order = StepOrder.create(step.order)
        if(order !== undefined){
            const description = StepDescription.create(step.description)

            if(description !== undefined){
                return new Step(order, description)
            }
            else{
                return undefined
            }
        }
        else{
            return undefined
        }
    }
}