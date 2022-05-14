class errors {
  async handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }
  async handleError(error) {
      console.log(error.message);
  }
}
export default errors;
