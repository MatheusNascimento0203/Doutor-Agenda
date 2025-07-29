
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/sing-up-form";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login" className="cursor-pointer">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="cursor-pointer">
              Criar Conta
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticationPage;
