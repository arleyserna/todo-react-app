import React from "react";
import { useState } from "react";

export function EditTaskForm({isVisible}){

    /*
        TODO : Complete this implementation
    
    */

    const [enable, setEnable] = useState(isVisible);

    if(enable){

        return( <>
                    <form>
                        <label>Valor de prueba</label>
                        <button onClick={setEnable(false)}>Cerrar</button>
                    </form>
                </>
        )
    }else{

        return null;
    }
}