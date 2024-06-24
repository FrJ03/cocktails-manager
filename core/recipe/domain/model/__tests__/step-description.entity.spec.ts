import { describe, it, expect } from "vitest";
import StepDescription from "../step-description.entity";

describe('step description entity test', () => {
    it('constructor test', () => {
        const description = 'pour 2 ounces of lime juice into the shaker'

        const stepDescription = new StepDescription(description)

        expect(stepDescription.description).toBe(description)
    })
    describe('create test', () => {
        it('valid description', () => {
            const description = 'pour 2 ounces of lime juice into the shaker'
    
            const stepDescription = StepDescription.create(description)
            
            expect(stepDescription).not.toBeUndefined()
            if(stepDescription !== undefined){
                expect(stepDescription.description).toBe(description)
            }
        })
        it('description with two paragraphs', () => {
            const description = 'pour 2 ounces of lime juice into the shaker\npour 2 ounces of tequila into the shaker'
    
            const stepDescription = StepDescription.create(description)
            
            expect(stepDescription).toBeUndefined()
        })
        it('description with tab', () => {
            const description = '\tpour 2 ounces of lime juice into the shaker'
    
            const stepDescription = StepDescription.create(description)
            
            expect(stepDescription).toBeUndefined()
        })
    })
})