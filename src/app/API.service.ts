/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  name: string;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateTodoInput = {
  id?: string | null;
  desc: string;
  body: string;
  todoTodoId?: string | null;
};

export type UpdateTodoInput = {
  id: string;
  desc?: string | null;
  body?: string | null;
  todoTodoId?: string | null;
};

export type DeleteTodoInput = {
  id?: string | null;
};

export type CreateCatagoryInput = {
  id?: string | null;
  name?: string | null;
  catagoryTodosId?: string | null;
};

export type UpdateCatagoryInput = {
  id: string;
  name?: string | null;
  catagoryTodosId?: string | null;
};

export type DeleteCatagoryInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDFilterInput | null;
  desc?: ModelStringFilterInput | null;
  body?: ModelStringFilterInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelCatagoryFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  and?: Array<ModelCatagoryFilterInput | null> | null;
  or?: Array<ModelCatagoryFilterInput | null> | null;
  not?: ModelCatagoryFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  desc: string;
  body: string;
  todo: {
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
  catagories: {
    __typename: "ModelCatagoryConnection";
    items: Array<{
      __typename: "Catagory";
      id: string;
      name: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  desc: string;
  body: string;
  todo: {
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
  catagories: {
    __typename: "ModelCatagoryConnection";
    items: Array<{
      __typename: "Catagory";
      id: string;
      name: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  desc: string;
  body: string;
  todo: {
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
  catagories: {
    __typename: "ModelCatagoryConnection";
    items: Array<{
      __typename: "Catagory";
      id: string;
      name: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateCatagoryMutation = {
  __typename: "Catagory";
  id: string;
  name: string | null;
  todos: {
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateCatagoryMutation = {
  __typename: "Catagory";
  id: string;
  name: string | null;
  todos: {
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteCatagoryMutation = {
  __typename: "Catagory";
  id: string;
  name: string | null;
  todos: {
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name: string;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  desc: string;
  body: string;
  todo: {
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
  catagories: {
    __typename: "ModelCatagoryConnection";
    items: Array<{
      __typename: "Catagory";
      id: string;
      name: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCatagoryQuery = {
  __typename: "Catagory";
  id: string;
  name: string | null;
  todos: {
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListCatagorysQuery = {
  __typename: "ModelCatagoryConnection";
  items: Array<{
    __typename: "Catagory";
    id: string;
    name: string | null;
    todos: {
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      desc: string;
      body: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  desc: string;
  body: string;
  todo: {
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
  catagories: {
    __typename: "ModelCatagoryConnection";
    items: Array<{
      __typename: "Catagory";
      id: string;
      name: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  desc: string;
  body: string;
  todo: {
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
  catagories: {
    __typename: "ModelCatagoryConnection";
    items: Array<{
      __typename: "Catagory";
      id: string;
      name: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  desc: string;
  body: string;
  todo: {
    __typename: "User";
    id: string;
    name: string;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
  catagories: {
    __typename: "ModelCatagoryConnection";
    items: Array<{
      __typename: "Catagory";
      id: string;
      name: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateCatagorySubscription = {
  __typename: "Catagory";
  id: string;
  name: string | null;
  todos: {
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateCatagorySubscription = {
  __typename: "Catagory";
  id: string;
  name: string | null;
  todos: {
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteCatagorySubscription = {
  __typename: "Catagory";
  id: string;
  name: string | null;
  todos: {
    __typename: "Todo";
    id: string;
    desc: string;
    body: string;
    todo: {
      __typename: "User";
      id: string;
      name: string;
    } | null;
    catagories: {
      __typename: "ModelCatagoryConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          name
          todos {
            __typename
            items {
              __typename
              id
              desc
              body
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          name
          todos {
            __typename
            items {
              __typename
              id
              desc
              body
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          name
          todos {
            __typename
            items {
              __typename
              id
              desc
              body
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateTodo(input: CreateTodoInput): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!) {
        createTodo(input: $input) {
          __typename
          id
          desc
          body
          todo {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          catagories {
            __typename
            items {
              __typename
              id
              name
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(input: UpdateTodoInput): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!) {
        updateTodo(input: $input) {
          __typename
          id
          desc
          body
          todo {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          catagories {
            __typename
            items {
              __typename
              id
              name
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(input: DeleteTodoInput): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!) {
        deleteTodo(input: $input) {
          __typename
          id
          desc
          body
          todo {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          catagories {
            __typename
            items {
              __typename
              id
              name
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateCatagory(
    input: CreateCatagoryInput
  ): Promise<CreateCatagoryMutation> {
    const statement = `mutation CreateCatagory($input: CreateCatagoryInput!) {
        createCatagory(input: $input) {
          __typename
          id
          name
          todos {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCatagoryMutation>response.data.createCatagory;
  }
  async UpdateCatagory(
    input: UpdateCatagoryInput
  ): Promise<UpdateCatagoryMutation> {
    const statement = `mutation UpdateCatagory($input: UpdateCatagoryInput!) {
        updateCatagory(input: $input) {
          __typename
          id
          name
          todos {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCatagoryMutation>response.data.updateCatagory;
  }
  async DeleteCatagory(
    input: DeleteCatagoryInput
  ): Promise<DeleteCatagoryMutation> {
    const statement = `mutation DeleteCatagory($input: DeleteCatagoryInput!) {
        deleteCatagory(input: $input) {
          __typename
          id
          name
          todos {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCatagoryMutation>response.data.deleteCatagory;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          todos {
            __typename
            items {
              __typename
              id
              desc
              body
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          desc
          body
          todo {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          catagories {
            __typename
            items {
              __typename
              id
              name
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetCatagory(id: string): Promise<GetCatagoryQuery> {
    const statement = `query GetCatagory($id: ID!) {
        getCatagory(id: $id) {
          __typename
          id
          name
          todos {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCatagoryQuery>response.data.getCatagory;
  }
  async ListCatagorys(
    filter?: ModelCatagoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCatagorysQuery> {
    const statement = `query ListCatagorys($filter: ModelCatagoryFilterInput, $limit: Int, $nextToken: String) {
        listCatagorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            todos {
              __typename
              id
              desc
              body
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCatagorysQuery>response.data.listCatagorys;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          todos {
            __typename
            items {
              __typename
              id
              desc
              body
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          todos {
            __typename
            items {
              __typename
              id
              desc
              body
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          todos {
            __typename
            items {
              __typename
              id
              desc
              body
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateTodoListener: Observable<OnCreateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          desc
          body
          todo {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          catagories {
            __typename
            items {
              __typename
              id
              name
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateTodoSubscription>;

  OnUpdateTodoListener: Observable<OnUpdateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          desc
          body
          todo {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          catagories {
            __typename
            items {
              __typename
              id
              name
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateTodoSubscription>;

  OnDeleteTodoListener: Observable<OnDeleteTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          desc
          body
          todo {
            __typename
            id
            name
            todos {
              __typename
              nextToken
            }
          }
          catagories {
            __typename
            items {
              __typename
              id
              name
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteTodoSubscription>;

  OnCreateCatagoryListener: Observable<
    OnCreateCatagorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCatagory {
        onCreateCatagory {
          __typename
          id
          name
          todos {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateCatagorySubscription>;

  OnUpdateCatagoryListener: Observable<
    OnUpdateCatagorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCatagory {
        onUpdateCatagory {
          __typename
          id
          name
          todos {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateCatagorySubscription>;

  OnDeleteCatagoryListener: Observable<
    OnDeleteCatagorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCatagory {
        onDeleteCatagory {
          __typename
          id
          name
          todos {
            __typename
            id
            desc
            body
            todo {
              __typename
              id
              name
            }
            catagories {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteCatagorySubscription>;
}
