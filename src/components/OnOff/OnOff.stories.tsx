import {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff",
    components: OnOff
}

export const On = () => <OnOff on={false} setOn={action('asdasd')}/>
export const Off = () => <OnOff on={true} setOn={action('asdasd')}/>

export const ModiFy = () => {

    const [value, setValue] = useState<boolean>(true)

    return <OnOff on={value} setOn={setValue}/>

}

