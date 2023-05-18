import Header from "../components/nav/Header";
import SideNav from "../components/nav/SideNav";

export default ({ children }: any) => {
  return (
    <main className="App flex w-full h-screen">
    <SideNav />
    <div className="w-full overflow-y-auto">
      <Header />
      <section className="pt-[104px] px-8">{children}</section>
    </div>
  </main>
  );
};
