
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
    title: 'Title 1',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    time: '5',
    tag: ['tag1']
  },
  {
    id: 2,
    title: 'Title 2',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    time: '10',
    tag: ['tag3']
  },
  {
    id: 3,
    title: 'Title 3',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    time: '15',
    tag: ['tag5']
  },
  {
    id: 4,
    title: 'Title 3',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    time: '15',
    tag: ['tag5']
  },
  {
    id: 5,
    title: 'Title 3',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    time: '15',
    tag: ['tag5']
  },
  {
    id: 6,
    title: 'Title 3',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    time: '15',
    tag: ['tag5']
  },
  {
    id: 7,
    title: 'Title 3',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    time: '15',
    tag: ['tag5']
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
