import Utils from "./utils.js";
import InjectionMoldingMachine from "./classes/injectionMoldingMachine.js"

let stroke_mm = 150
let volume = 35

let machineIMM14 = new InjectionMoldingMachine("IMM14", 18)
let machineIMM17 = new InjectionMoldingMachine("IMM17", 35)

let volume_imm14 = machineIMM14.get_volume_by_mm(stroke_mm)
console.log(machineIMM14.get_mm_by_volume(volume) + "mm for IMM14" + " <=> " + machineIMM17.get_mm_by_volume(volume) + "mm for IMM17");
console.log(machineIMM14.get_mm_by_volume(machineIMM14.get_volume_by_mm(stroke_mm)) + "mm for IMM14" + " <=> " + machineIMM17.get_mm_by_volume(machineIMM14.get_volume_by_mm(stroke_mm)) + "mm for IMM17");
console.log(machineIMM14.get_mms_by_RPM(60));
console.log(machineIMM14.get_RPM_by_mms(56.548667764616276));
