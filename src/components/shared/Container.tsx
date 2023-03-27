function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="w-full container relative h-full mx-auto flex md:px-8">
      {children}
    </div>
  );
}

export default Container;
