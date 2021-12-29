class Singleton {
  private static instancia: Singleton;
  private constructor() {
    //init
  }
  static getInstancia() {
    if (!Singleton.instancia) {
      Singleton.instancia = new Singleton();
    }
    return Singleton.instancia;
  }
}
export default Singleton;
