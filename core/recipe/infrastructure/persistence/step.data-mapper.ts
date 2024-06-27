import { FlattenMaps } from "mongoose"
import { StepType } from "./step.type"
import Step from "../../domain/model/step.entity"
import StepOrder from "../../domain/model/step-order.entity"
import StepDescription from "../../domain/model/step-description.entity"

const StepDataMapper = {
    toModel: (step: FlattenMaps<StepType>): Step => 
        new Step(
            new StepOrder(step.order),
            new StepDescription(step.description)
        )
} as const

export { StepDataMapper }