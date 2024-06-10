// superclasse / classe mãe
class Lista {
  
  // lista
  protected list: any[];

  // adiciona um item no final da lista
  push(item: any): void {
    this.list.push(item);
  }

  // verifica se a lista está vazia
  isEmpty(): boolean {
    return this.list.length === 0;
  }

  // retorna o tamanho da lista
  size(): number {
    return this.list.length;
  }
}

class Pilha extends Lista {
  pop(): any {
    return this.list.pop();
    
  }

  peek(): any {
    return this.list[this.list.length - 1];

  }
}

class Fila extends Lista {
  pop(): any {
    return this.list.shift();

  }
  
  peek(): any {
    return this.list[0];

  }
}