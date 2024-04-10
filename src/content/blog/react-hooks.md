---
title: "Liste des principaux Hook React "
description: "Les hooks ReactJS permettent d'ajouter des fonctionnalités aux composants React"
category: "Développement Web"
categoryColor: "#44CB8A"
pubDate: "Apr 10 2024"
updatedDate: "Apr 10 2024"
heroImage: "/blog/images/react-hooks.jpg"
---

# useState

C'est le plus basique des Hook, il permet de gérer un état au sein d'un composant qui souhaite l'utiliser.

N.B : L'état est préservé même après que le composant ne soit plus affiché

```javascript
const [counter, setCounter] = useState(0);
```

# useEffet

Permet de rendre les composant un peu plus interactif comme par exemple récupérer des données d'un back-end, ajouter des évènements et faire de la manipulation de DOM. Utiliser ce hook permet de dire au composant comment se comporter une fois qu'il est affiché.

N.B: c'est activité sont nommés des "side-effects"

```javascript
import React, { useState, useEffect } from "react";
export default function functionalComponent() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = "Counter: ${count}";
  });
  return (
    <div>
      <p>Counter value: {counter}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

# useReducer

Le but de ce hook est le même que useState mais permet de gérer des cas complexes lié à la gestion de l'état d'un composant comme par exemple lors de la gestion d'un état qui implique plusieurs sous-valeurs ou lorsque l'état suivant dépend du précédent.

Il nécessite deux arguments importants, une fonction réductrice et un état initial. La fonction réductrice est une fonction qui prend l'état actuel et une action, et renvoie le nouvel état en fonction de l'action. Voici un exemple:

```javascript
import React, { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
export default const Counter = () => {
  // State initializer with useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
```

N.B : Combiné à useContext, ces hook permettent de se passer d'outil de gestion d'état comme Redux ou Recoil.

# useContext

Pour rappel, en React le context est une fonctionnalité qui permet de transmettre des données à travers l'arborescence des composants sans avoir à transmettre manuellement les accessoires des composants à chaque niveau.

Il permet une meilleur lisibilité du code et permet de réduire la duplication du code

Le hook useContext est utilisé pour accéder aux valeurs dans ce contexte. useContext permet aux composants de s'abonner à un contexte créé par un composant fournisseur React.createContext et d'accéder à sa valeur actuelle dans l'arborescence des composants.

```javascript
import React, { createContext, useContext } from "react";
const MyContext = createContext();
<MyContext.Provider value="Context Provider value">
  <ChildComponent />
</MyContext.Provider>;
const ChildComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};
```

# useCallback

# useMemo

# useRef

# useTransition

# useId

Source :

- [Article Dev.to de Borneel B. Phukan](https://dev.to/borneelphukan/9-react-hooks-that-you-should-be-aware-of-as-a-frontend-developer-4c2m?utm_source=newsletter.reactdigest.net&utm_medium=newsletter&utm_campaign=how-does-useoptimistic-work-internally-in-react)
