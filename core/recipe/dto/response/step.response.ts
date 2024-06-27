import { DeepReadonly } from "ts-essentials"
import Step from "../../domain/model/step.entity"

type StepResponse = DeepReadonly<{
    order: number,
    description: string
}>

const StepResponse = {
    fromModel: (step: Step): StepResponse => {
        return {
            order: step.order,
            description: step.description
        } as StepResponse
    }
}

export { StepResponse }