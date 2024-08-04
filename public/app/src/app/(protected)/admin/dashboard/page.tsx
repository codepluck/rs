import DashboardComponent from "./_components/dashboard-component";
const DashboardPage = async ({ params: { lang } }) => {
    // const trans = await getDictionary(lang);
    return <DashboardComponent trans={{}} />;
};

export default DashboardPage;
