import { ChildComponent } from "./childComponent";

export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello ${childName}`);
    }
    return <ChildComponent greetHandler = {greetParent}/>
}

