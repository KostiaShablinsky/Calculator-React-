import { Button } from "@chakra-ui/react";

export default function CountButton(props) {
    return ( <Button onClick = {() => { if(props.expression === '-' && props.data === 0){props.onClick(props.expression)}
    
       else props.onClick(props.data + props.expression)}}>
        {props.expression}
         </Button> )
}

