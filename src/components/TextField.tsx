import React, { useRef, useState } from 'react'

interface Person {
    firstname: string;
    lastname: string;
}
interface Props {
    text: string;
    ok?: boolean,
    i?: number, 
    fn?: (bob: string) => string;
    person: Person
    handleChange: () => React.ChangeEventHandler<HTMLInputElement> 
    
}

interface TextNode {
    text: string
}

const TextField: React.FC <Props> = ({handleChange}) => {
    const [count, setCount] = useState<TextNode>({text: "hello"})
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
  
    return (
    <div  ref={divRef}>
        <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}
 
export default TextField