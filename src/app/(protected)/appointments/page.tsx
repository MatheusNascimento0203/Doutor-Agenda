import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

import AddAppointmentButton from "./_components/add-appointment-button";

const AppointmentsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos da sua clinica</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <AddAppointmentButton />
        </PageActions>
      </PageHeader>
      <PageContent>
        <div className="grid grid-cols-3 gap-6">
          <h1>teste</h1>
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default AppointmentsPage;
