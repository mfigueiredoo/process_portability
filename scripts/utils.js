var Utils = {
    mm_to_cm3 : (mm_stroke, machine_screw_area_mm) => {
        let volume_mm3 = mm_stroke * machine_screw_area_mm
        return volume_mm3/1000
    },
    cm3_to_mm : (cm3_volume, machine_screw_area_mm) => {
        let volume_mm3 = cm3_volume*1000
        return volume_mm3/machine_screw_area_mm
    }
}


export default Utils