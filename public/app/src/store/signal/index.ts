type SignalHandler<T> = (value: T) => void;

class Signal<T> {
    private handlers: Set<SignalHandler<T>> = new Set();

    subscribe(handler: SignalHandler<T>): () => void {
        this.handlers.add(handler);
        return () => {
            this.handlers.delete(handler);
        };
    }

    emit(value: T): void {
        this.handlers.forEach(handler => handler(value));
    }
}

export default Signal;
