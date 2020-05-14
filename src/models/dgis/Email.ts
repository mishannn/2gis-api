export default interface Email {
  /**
   * Разрешение на отправку письма в компанию.
   */
  allowed?: boolean;
  /**
   * email, на которые необходимо отправлять письма в компанию.
   */
  email?: string;
}
