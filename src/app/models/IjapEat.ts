

  export interface Login {
      name: string;
      token: string;
  }

  export interface Content {
      name: string;
      img: string;
      number: number;
      price: number;
  }

  export interface Menu {
      id: number;
      label: string;
      content: Content[];
  }

  export interface Review {
      id: number;
      name: string;
      vote: boolean;
      description: string;
  }

  export interface Login {
      login: Login;
      menu: Menu[];
      reviews: Review[];
  }



