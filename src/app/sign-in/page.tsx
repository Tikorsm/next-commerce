import { SignIn } from "@clerk/nextjs/app-beta"

type SingInPageProps = {
  searchParams: {
    redirectUrl: string;
  };
};
export default function SingInPage({ searchParams : { redirectUrl }} : SingInPageProps) {
  return (
    <section className="py-14 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
        <SignIn signUpUrl="/sign-up" redirectUrl={redirectUrl}/>
        </div>
      </div>

    </section>
  )
}