import Utils from "./utils.js";
import InjectionMoldingMachine from "./classes/injectionMoldingMachine.js"

let stroke_mm = 150
let volume_cm3 = 38.17035074111599

let machine = new InjectionMoldingMachine("IMM14", 18)
console.log(machine);
console.log(stroke_mm + "mm" +" <=> "+ Utils.mm_to_cm3(stroke_mm, machine.screw_area_mm2) + "cm3")
console.log(volume_cm3 + "cm3" +" <=> "+ Utils.cm3_to_mm(volume_cm3, machine.screw_area_mm2) + "mm")