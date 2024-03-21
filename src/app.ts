interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}

enum Category {
    Software,
    Hardware,
    Fiction,
    NonFiction
}




type BookRequiredFields = Required<Book>;
const bookRequiredFields: BookRequiredFields = {
  id: 1,
  title: "Book Title",
  author: "Book Author",
  available: true,
  category: Category.Fiction,
};

type UpdatedBook = Partial<Book>;
const updatedBook: UpdatedBook = {
  id: 2,
  title: "Updated Book Title",
};


interface Author {
    name: string;
    email: string;
    age: number;
  }

  
type AuthorWoEmail = Omit<Author, 'email'>;

type CreateCustomerFunctionType = (name: string, age: number) => string;

const createCustomer: CreateCustomerFunctionType = (name, age) => name + age.toString();

const params = {
  name: "John",
  age: 30,
};

const result = createCustomer(params.name, params.age);
console.log(result);

type FnType = (param1: string, param2: number, param3: boolean) => symbol;

type Param1<T> = T extends (arg1: infer P1, ...args: any[]) => any ? P1 : never;
type Param2<T> = T extends (arg1: any, arg2: infer P2, ...args: any[]) => any ? P2 : never;
type Param3<T> = T extends (arg1: any, arg2: any, arg3: infer P3, ...args: any[]) => any ? P3 : never;

type P1 = Param1<FnType>;
type P2 = Param2<FnType>;
type P3 = Param3<FnType>;