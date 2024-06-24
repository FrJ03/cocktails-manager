import { describe, it, expect } from "vitest";
import StepDescription from "../step-description.entity";
import StepOrder from "../step-order.entity";
import Step from "../step.entity";

describe('step entity test', () => {
    it('constructor test', () => {
        const order = 5
        const description = 'pour 2 ounces of lime juice into the shaker'
        const stepData = {
            order: new StepOrder(order),
            description: new StepDescription(description)
        }

        const step = new Step(stepData.order, stepData.description)

        expect(step.order).toBe(order)
        expect(step.description).toBe(description)
    })
})