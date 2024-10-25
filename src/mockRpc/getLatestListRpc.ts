
export type TPost = {
  id: number,
  title: string,
  preview: string,
  time: string,
  tag: string[]
}

const mockData: TPost[] = [
  {
    id: 1,
    title: 'Your First Component',
    preview: 'Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey! You will learn',
    time: '5',
    tag: ['React']
  },
  {
    id: 2,
    title: 'Importing and Exporting Components',
    preview: 'The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you keep your files easy to scan and reuse components in more places.',
    time: '10',
    tag: ['React']
  },
  {
    id: 3,
    title: 'Writing Markup with JSX',
    preview: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.',
    time: '3',
    tag: ['React']
  },
  {
    id: 4,
    title: 'JavaScript in JSX with Curly Braces',
    preview: 'JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.',
    time: '5',
    tag: ['React']
  },
  {
    id: 5,
    title: 'Passing Props to a Component',
    preview: 'React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.',
    time: '12',
    tag: ['React']
  },
  {
    id: 6,
    title: 'Conditional Rendering',
    preview: 'Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.',
    time: '8',
    tag: ['React']
  },
  {
    id: 7,
    title: 'Rendering Lists',
    preview: 'You will often want to display multiple similar components from a collection of data. You can use the JavaScript array methods to manipulate an array of data. On this page, you’ll use filter() and map() with React to filter and transform your array of data into an array of components.',
    time: '10',
    tag: ['React']
  }
]

const getLatestListRpc = async (): Promise<TPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockData
      )
    }, 1000)
  })
}

export default getLatestListRpc
