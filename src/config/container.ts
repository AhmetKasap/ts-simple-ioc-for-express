import "reflect-metadata";
type Constructor<T = any> = new (...args: any[]) => T;

class Container {
  private registrations = new Map<string, Constructor>();

  register<T>(token: string, ctor: Constructor<T>) {
    this.registrations.set(token, ctor);
  }

  resolve<T>(token: string): T {
    const ctor = this.registrations.get(token);
    if (!ctor) {
      throw new Error(`Dependency not found: ${token}`);
    }

    // bağımlılıkları constructor parametrelerinden otomatik çöz
    const paramTypes: Constructor[] = Reflect.getMetadata("design:paramtypes", ctor) || [];

    const dependencies = paramTypes.map((dep) => {
      // dep ismini stringe çevirelim
      const depToken = dep.name;
      return this.resolve(depToken);
    });

    return new ctor(...dependencies);
  }
}

export const container = new Container();
