class InjectionMoldingMachine {
    constructor(name_or_identification, screw_diameter_mm) {
        this.name = name_or_identification
        this.screw_diameter_mm = screw_diameter_mm
        this.screw_area_mm2 = this.#calculateScrewArea(this.screw_diameter_mm)
        this.screw_perimeter_mm = this.#calculateScrewPeriemeter(this.screw_diameter_mm)
    }
    #calculateScrewArea = (screw_diameter_mm) => {
        return Math.PI * Math.pow((screw_diameter_mm/2), 2)
    }
    #calculateScrewPeriemeter = (screw_diameter_mm) => {
        return Math.PI * (screw_diameter_mm)
    }
    get_volume_by_mm = (stroke_mm) => {
        let volume_mm3 = stroke_mm * this.screw_area_mm2
        return volume_mm3/1000
    }
    get_mm_by_volume = (volume_cm3) => {
        let volume_mm3 = volume_cm3*1000
        return volume_mm3/this.screw_area_mm2
    }
    get_mms_by_RPM = (rot_RPM) => {
        let revolutions_per_sec = rot_RPM / 60
        return revolutions_per_sec * this.screw_perimeter_mm
    }
    get_RPM_by_mms = (rot_mms) => {
        let revolutions_per_sec = rot_mms / this.screw_perimeter_mm
        return revolutions_per_sec * 60
    }
}

export default InjectionMoldingMachine