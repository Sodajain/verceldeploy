import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center text-center gap-8 ">
        <p className="text-5xl font-bold">
          We are <span className="text-primary">Habiiito</span>{" "}
        </p>
        <Badge variant={"success"} className="text-sm">
          Unlock Your Ideal Student Living Experience
        </Badge>
      </div>
      <div>
        <p className="text-md">
          Habiiito is revolutionizing the student accommodation landscape by
          addressing the crucial pain points faced by students and colleges
          alike. With a comprehensive ecosystem for hostel management, Habiiito
          is dedicated to improving the quality, accessibility, and management
          of student housing. Our vision is to create a world where every
          student has access to comfortable, safe, and supportive living spaces
          that enhance their educational journey.
        </p>
      </div>
      <div>
        <p className="text-lg text-primary font-bold">Our Vision</p>
        <p className="text-xl font-semibold">
          Transforming student living experiences while streamlining operational
          efficiencies for colleges
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
          <div>image</div>
          <div>
            <p className="text-md">
              We identified a significant gap in the student hostel
              accommodation sector and set out to solve it with innovative,
              technology-driven solutions. Our goal is to ensure that student
              accommodations are more than just places to stay—they are
              communities where students thrive.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
