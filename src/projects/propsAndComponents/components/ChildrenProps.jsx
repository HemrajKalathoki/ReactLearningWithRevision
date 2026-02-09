export function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-200 text-blue-800 border-blue-500",
    red: "bg-red-200 text-red-800 border-red-500",
    green: "bg-green-200 text-green-800 border-green-500",
    purple: "bg-purple-200 text-purple-800 border-purple-500",
    yellow: "bg-yellow-50 text-yellow-800 border-yellow-500",
  };

  return (
    <div
      className={`border-l-4 p-6 rounded-lg shadow-md ${colorClasses[color]}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}

      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="bg-gray-100 px-2 md:px-6 sm:px-4 py-8 lg:p-8 rounded-xl shadow-md mt-5">
      <h2 className="text-gray-800 text-5xl font-bold">Children Props</h2>
      <p className="my-5 text-gray-800">
        The <span className="bg-gray-200 rounded px-2">Children</span> Prop allows you to pass JSX elements or components as children to a parent component. This is useful for creating reusable components that can wrap other content.
      </p>

      <div className="space-y-6">
          <h3 className="text-xl text-gray-800 font-bold mb-4">Card Component with Children:</h3>
          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name: </strong>Hemraj Kalathoki
              </p>
              <p className="mb-2">
                <strong>Email: </strong>hemraj.kalathoki3@gmail.com
              </p>
              <p className="mb-2">
                <strong>Role: </strong>Software Developer
              </p>
            </Card>

            <Card title="Statistics" color="green">
              <p className="mb-2 flex justify-between">
                <strong>Total Users: </strong><strong>1,000+</strong>
              </p>
              <p className="mb-2 flex justify-between">
                <strong>Active Sessions: </strong><strong>500+</strong>
              </p>
              <p className="mb-2 flex justify-between">
                <strong>Revenue: </strong><strong>$54,000/-</strong>
              </p>
            </Card>

            <Card title="Quick Actions" color="purple">
              <button className="w-full bg-purple-500 text-white font-bold py-2 rounded-lg mb-4 hover:bg-purple-600 transition-all duration-300">Create New</button>
              <button className="w-full bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700">View All</button>
            </Card>

            <Card title="Warnings" color="red">
              <p className="mb-2">
                Your trial period is about to expire. Please upgrade to continue using all features.
              </p>
            </Card>

          </Container>
      </div>
    </section>
  );
}

export default ChildrenProps;
