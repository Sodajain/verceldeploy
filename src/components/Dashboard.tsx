import { Button } from "./ui/button";

export default function Dashboard() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 mt-24">
      <div className="flex flex-col gap-6 px-6 md:px-24 lg:px-48">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">All under one roof with </p>
          <p className="text-3xl font-semibold text-primary">HABIIITO APP</p>
        </div>

        <p className="text-sm text-gray-600">
          An app for both students and landlords, our app simplifies search,
          management, and communication, ensuring a smooth and efficient housing
          experience.
        </p>
        <div className="flex gap-2">
          <Button className="w-full bg-background-dark hover:bg-background-dark/80">
            Admin{" "}
          </Button>
          <Button className="w-full bg-background-dark hover:bg-background-dark/80">
            Student
          </Button>
        </div>
      </div>
      <div></div>
    </main>
  );
}
