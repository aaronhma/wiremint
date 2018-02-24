export class Customer {
    constructor(
        public firstName = '',
        public lastName = '',
        public email = '',
        public state = '',
        public zip?: string) { }
}
