import Settings from "../settings.js"
import ParamData from "./paramData.js"
import Parameter from "./parameter.js"

class InjectionMoldingMachine {
    constructor(name_or_identification, screw_diameter_mm, parameters) {
        this.name = name_or_identification
        this.screw_diameter_mm = screw_diameter_mm
        this.screw_area_mm2 = this.#calculateScrewArea(this.screw_diameter_mm)
        this.screw_perimeter_mm = this.#calculateScrewPeriemeter(this.screw_diameter_mm)
        this.parameters = []

        if (!parameters || parameters == []) return
        this.parameters = this.setParameters(parameters)
    }

    #calculateScrewArea = (screw_diameter_mm) => {
        return Math.PI * Math.pow((screw_diameter_mm/2), 2)
    }
    #calculateScrewPeriemeter = (screw_diameter_mm) => {
        return Math.PI * (screw_diameter_mm)
    }
    #convertParameters = () => {

    }

    get_cm3_by_mm = (stroke_mm) => {
        let volume_mm3 = stroke_mm * this.screw_area_mm2
        return volume_mm3/1000
    }
    get_mm_by_cm3 = (volume_cm3) => {
        let volume_mm3 = volume_cm3*1000
        return volume_mm3/this.screw_area_mm2
    }


    get_mms_by_rpm = (rot_RPM) => {
        let revolutions_per_sec = rot_RPM / 60
        return revolutions_per_sec * this.screw_perimeter_mm
    }
    get_ms_by_rpm = (rot_RPM) => {
        let revolutions_per_sec = rot_RPM / 60
        return (revolutions_per_sec * this.screw_perimeter_mm) / 1000
    }
    get_ms_by_mms = (rot_mms) => {
        let revolutions_per_sec = rot_mms / this.screw_perimeter_mm
        return (revolutions_per_sec * this.screw_perimeter_mm) / 1000
    }
    get_rpm_by_mms = (rot_mms) => {
        let revolutions_per_sec = rot_mms / this.screw_perimeter_mm
        return revolutions_per_sec * 60
    }
    get_rpm_by_ms = (rot_ms) => {
        let revolutions_per_sec = (rot_ms*1000) / this.screw_perimeter_mm
        return revolutions_per_sec * 60
    }
    get_mms_by_ms = (rot_ms) => {
        let revolutions_per_sec = (rot_ms*1000) / this.screw_perimeter_mm
        return revolutions_per_sec * this.screw_perimeter_mm
    }

    setParameters = (parameters) => {
        if (!parameters || parameters == []) return


        parameters.forEach((param, param_k) => {
            param.data.forEach((data, data_k) => {

                if (data.unit == "_cm_3") {
                    parameters[param_k].data.push(new ParamData(this.get_mm_by_cm3(data.value), "_mm"))
                }
                if (data.unit == "_cm_3_s") {
                    parameters[param_k].data.push(new ParamData(this.get_mm_by_cm3(data.value), "_mm_s"))
                }

                if (data.unit == "_mm") {
                    parameters[param_k].data.push(new ParamData(this.get_cm3_by_mm(data.value), "_cm_3"))
                }
                if (data.unit == "_mm_s") {
                    if(param.description != "rot-speed")
                        parameters[param_k].data.push(new ParamData(this.get_cm3_by_mm(data.value), "_cm_3_s"))
                }


                if(param.description == "rot-speed") {
                    if (data.unit == "_m_s") {
                        parameters[param_k].data.push(new ParamData(this.get_rpm_by_ms(data.value), "_rpm"))
                        parameters[param_k].data.push(new ParamData(this.get_mms_by_ms(data.value), "_mm_s"))
                    }
                    if (data.unit == "_mm_s") {
                        parameters[param_k].data.push(new ParamData(this.get_rpm_by_mms(data.value), "_rpm"))
                        parameters[param_k].data.push(new ParamData(this.get_ms_by_mms(data.value), "_m_s"))
                    }
                    if (data.unit == "_rpm") {
                        parameters[param_k].data.push(new ParamData(this.get_mms_by_rpm(data.value), "_mm_s"))
                        parameters[param_k].data.push(new ParamData(this.get_ms_by_rpm(data.value), "_m_s"))
                    }
                }

            })
        });

        this.parameters = parameters
    }

    getPortableParameters = () => {
        if (!this.parameters) return false

        let portable_parameters = []

        this.parameters.forEach(param => {
            param.data.forEach(p_data => {
                Settings.portable_units.forEach(p_unit => {
                    if (p_data.unit == p_unit) {
                        portable_parameters.push(new Parameter(param.description, [p_data]))
                    }
                })
            })
        })

        return portable_parameters
    }
}

export default InjectionMoldingMachine