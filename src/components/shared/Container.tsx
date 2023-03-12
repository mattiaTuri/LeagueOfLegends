function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="container relative h-full mx-auto flex px-8">
      {children}
    </div>
  );
}

export default Container;
