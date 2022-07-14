import React from 'react'

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
}

const TextField: React.FC <Props> = ({}) => {
  return (
    <div>
        <input />
    </div>
  )
}
 
export default TextField