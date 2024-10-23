export type TBodyType = 'header' | 'text' | 'image';

export interface IBodyContent {
  type: TBodyType;
  content: string;
}

export interface IMockDataItem {
  id: number;
  title: string;
  body: IBodyContent[];
  preview: string;
  time: string;
  tags: string[];
}

export type TMockData = {
  [key: number]: IMockDataItem;
};


const mockData: TMockData = {
  1: {
    id: 1,
    title: 'Git: Основы и работа с ветками',
    body: [
      {
        type: 'header',
        content: 'Что такое Git?'
      },
      {
        type: 'text',
        content: 'Git — это распределённая система контроля версий, которая позволяет отслеживать изменения в коде и работать над проектом нескольким разработчикам одновременно.'
      },
      {
        type: 'header',
        content: 'Создание новой ветки'
      },
      {
        type: 'text',
        content: 'Ветки в Git позволяют изолировать работу над новыми функциями или изменениями. Для создания новой ветки используйте команду "git checkout -b <branch-name>".'
      },
      {
        type: 'image',
        content: '/public/header.jpg'
      }
    ],
    preview: 'Git — это система контроля версий, которая позволяет отслеживать изменения в коде и работать над проектом нескольким разработчикам одновременно...',
    time: '7',
    tags: ['git', 'ветки', 'основы']
  },
  2: {
    id: 2,
    title: 'Решение конфликтов в Git',
    body: [
      {
        type: 'header',
        content: 'Что такое конфликт?'
      },
      {
        type: 'text',
        content: 'Конфликт в Git возникает, когда изменения из двух разных веток не могут быть автоматически объединены. Это происходит, когда изменения затрагивают одну и ту же строку кода.'
      },
      {
        type: 'header',
        content: 'Как решать конфликты?'
      },
      {
        type: 'text',
        content: 'Чтобы решить конфликт, откройте конфликтующие файлы, выберите корректные изменения и выполните команду "git add <filename>", после чего завершите слияние с "git commit".'
      },
      {
        type: 'image',
        content: '/public/header.jpg'
      }
    ],
    preview: 'Конфликт в Git возникает, когда изменения из двух разных веток не могут быть автоматически объединены. Узнайте, как их решать...',
    time: '6',
    tags: ['git', 'конфликты', 'слияние']
  },
  3: {
    id: 3,
    title: 'Git: Работа с удалёнными репозиториями',
    body: [
      {
        type: 'header',
        content: 'Что такое удалённый репозиторий?'
      },
      {
        type: 'text',
        content: 'Удалённый репозиторий — это версия вашего проекта, хранящаяся в интернете или на удалённом сервере. Git позволяет синхронизировать локальные изменения с удалённым репозиторием с помощью команд "git push" и "git pull".'
      },
      {
        type: 'header',
        content: 'Клонирование репозитория'
      },
      {
        type: 'text',
        content: 'Чтобы склонировать удалённый репозиторий на ваш компьютер, используйте команду "git clone <repository-url>". Это создаст локальную копию проекта.'
      },
      {
        type: 'image',
        content: '/public/header.jpg'
      }
    ],
    preview: 'Удалённый репозиторий — это версия вашего проекта, хранящаяся в интернете. Узнайте, как работать с ним с помощью команд "git push" и "git pull"...',
    time: '8',
    tags: ['git', 'удалённые репозитории', 'работа с репозиториями']
  }
};


const getPostRpc = async (id: number): Promise<IMockDataItem> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockData[id]
      )
    }, 1000)
  })
}

export default getPostRpc
