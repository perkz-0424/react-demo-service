import {createStores} from "perkz";
import main from "@/store/main";
import pc from "@/store/pc";
import mobile from "@/store/mobile";

export default createStores({
  main, pc, mobile
});
