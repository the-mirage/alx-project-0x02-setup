import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  const handleButtonClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked!`);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>

        <div className="space-y-6">
          {/* Button Examples Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Button Examples
            </h2>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Small rounded-sm button */}
              <Button
                size="small"
                shape="rounded-sm"
                onClick={() => handleButtonClick("Small rounded-sm")}
              >
                Small Button
              </Button>

              {/* Medium rounded-full button */}
              <Button
                size="medium"
                shape="rounded-full"
                onClick={() => handleButtonClick("Medium rounded-full")}
              >
                Medium Button
              </Button>

              {/* Large rounded-md button */}
              <Button
                size="large"
                shape="rounded-md"
                onClick={() => handleButtonClick("Large rounded-md")}
              >
                Large Button
              </Button>
            </div>

            {/* Additional examples showing all combinations */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                All Size and Shape Combinations
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Small buttons */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-600">Small</h4>
                  <div className="flex flex-col space-y-2">
                    <Button size="small" shape="rounded-sm">
                      Small SM
                    </Button>
                    <Button size="small" shape="rounded-md">
                      Small MD
                    </Button>
                    <Button size="small" shape="rounded-full">
                      Small Full
                    </Button>
                  </div>
                </div>

                {/* Medium buttons */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-600">Medium</h4>
                  <div className="flex flex-col space-y-2">
                    <Button size="medium" shape="rounded-sm">
                      Medium SM
                    </Button>
                    <Button size="medium" shape="rounded-md">
                      Medium MD
                    </Button>
                    <Button size="medium" shape="rounded-full">
                      Medium Full
                    </Button>
                  </div>
                </div>

                {/* Large buttons */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-600">Large</h4>
                  <div className="flex flex-col space-y-2">
                    <Button size="large" shape="rounded-sm">
                      Large SM
                    </Button>
                    <Button size="large" shape="rounded-md">
                      Large MD
                    </Button>
                    <Button size="large" shape="rounded-full">
                      Large Full
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
