class InjectionMoldingMachine {
    constructor(name_or_identification, screw_diameter_mm) {
        this.name = name_or_identification
        this.screw_diameter_mm = screw_diameter_mm
        this.screw_area_mm2 = this.#calculateScrewArea(this.screw_diameter_mm)
    }
    #calculateScrewArea = (screw_diameter_mm) => {
        return Math.PI * Math.pow((screw_diameter_mm/2), 2)
    }
}

export default InjectionMoldingMachine