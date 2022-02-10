import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Image,
  Notes,
  Markdown,
  Appear,
  UnorderedList,
  ListItem,
  CodePane,
} from "spectacle";

const theme = {
  colors: {
    primary: "#36f",
    secondary: "#00e889",
  },
  fonts: {
    header: "Prompt",
    text: "Prompt",
  },
};

function App() {
  return (
    <Deck theme={theme}>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Welcome, Frontend Meetup!</Heading>
          <Text>Our adventures in Next.js</Text>
          <Image
            src="https://www.polygence.org/_next/image?url=https%3A%2F%2Fdpl6hyzg28thp.cloudfront.net%2Fmedia%2F2017-09_konnekt_portrek_026_Bw4fTvj.jpg&w=1200&q=75"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
          />
          <Text fontSize="small">
            Adam Gyulavari, Head of Engineering at Polygence
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>What is Polygence?</Heading>
        <Image src="https://dpl6hyzg28thp.cloudfront.net/1000/media/program2.jpg" />
        <Notes>
          <Markdown componentProps={{ fontSize: 'xx-large', color: 'white' }}>
            {`- started as small side project at stanford
- connect students and mentors for 10 session research project mentorship
- the founder had some coding expreience
- started to build a platform
- for administration
- for communication
- since then the platform is a full mentorship management tool
- to help students and mentors finish their project on time
- scheduling, communication
- a full administration tool for the operations team
- matching up students and mentors through multiple steps
- customer service requests
- managing payments from students and to mentors`}
          </Markdown>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/react-next.png" width="100%" />
        </FlexBox>
        <Notes>
          <Markdown componentProps={{ fontSize: 'xx-large', color: 'white' }}>
            {`- the whole frontend was in good old react class components :D
  - it become obvious that the increase of interest drives higher traffic
  - and the react based landing page is a poor experience
  - and it does not do well in organic searches as well
  - back then next was only few years old, not even having a stable release
  - since the docs and the community was growing
  - and showed a mature enough platform
  - and our designer just made a whole new concept for the landing
  - we've jumped into switching the landing page to nextjs`}
          </Markdown>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Huge performance gain.</Heading>
          <Text>(As promised)</Text>
          <Image src="/performance.png" width="100%" />
        </FlexBox>
        <Notes>
          <Markdown componentProps={{ fontSize: 'xx-large', color: 'white' }}>
            {`- huge performance gain
- a few weeks later positions on google 10-30 -> 1
- I think it was even higher, but since then we've added more frontend side logic
- and those bring these numbers down a bit
- lighthouse sometimes lags, on pagespeed the site passes the core web vitals since january 2021
- and never failed them since then
- web vitals`}
          </Markdown>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Different framework</Heading>
          <Text>Has a learning curve</Text>
          <Image src="/release.png" width="100%" />
        </FlexBox>
        <Notes>
          <Markdown componentProps={{ fontSize: 'xx-large', color: 'white' }}>
            {`- even though it was react
  - mostly because of the whole new design we could not use the original components
  - and even if they had the same design they needed to be refactored
  - so it was 1.5 month work for a single dev at the time to build most of the pages you can see there
  - it _is_ a different framework. it's not react
  - that means it needs learning even though there'll be similar elements to react, so you get a headstart
  - but mostly it's useful because the main language with react experience the learning curve is great`}
          </Markdown>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/nextjs.png" width="30%" />
          <UnorderedList color="secondary">
            <Appear>
              <ListItem>Static site generation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Automatic static optimazation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Server side rendering</ListItem>
            </Appear>
            <Appear>
              <ListItem>Image optimazation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Static hosting, pages, api</ListItem>
            </Appear>
            <Appear>
              <ListItem>Splitting backend and frontend JavaScript</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <Notes>
          - only renders frontend and that is also served after rendered
        </Notes>
      </Slide>
      <Slide>
        <CodePane language="javascript">
          {`
      export default function Content() {
        const [photo, setPhoto] = useState(null);
        const { id } = useParams();

        useEffect(() => {
          fetch(\`https://jsonplaceholder.typicode.com/photos/\${id}\`)
            .then((res) => res.json())
            .then(setPhoto);
        }, [id]);
        
        if (!photo) {
          return null;
        }
        
        return (
          <div className="frame">
            <img alt="thumbnail" src={photo.thumbnailUrl} width={150} height={150} />
            <p>
              {id} - {photo.title}
            </p>
          </div>
        );
      }
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>The content</Heading>
        <CodePane language="javascript">
          {`
      import Image from "next/image";

      export default function Content({ id, photo }) {
        return (
          <div className="frame">
            <Image
              alt="thumbnail"
              src={photo.thumbnailUrl}
              width={150}
              height={150}
            />
            <p>
              {id} - {photo.title}
            </p>
          </div>
        );
      }
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Static site generation</Heading>
        <CodePane language="javascript">
          {`
      export async function getStaticPaths() {
        const paths = Array.from({ length: 20 }).map((_, index) => ({
          params: { id: \`\${index + 1}\` },
        }));
        return { paths, fallback: false };
      }
      
      export async function getStaticProps({ params }) {
        const response = await fetch(
          \`https://jsonplaceholder.typicode.com/photos/\${params.id}\`
        );
        const photo = await response.json();
        return { props: { id: params.id, photo } };
      }
      
      export default Content;
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Server side rendering</Heading>
        <CodePane language="javascript">
          {`
      export async function getServerSideProps({ params }) {
        const response = await fetch(
          \`https://jsonplaceholder.typicode.com/photos/\${params.id}\`
          );
          const photo = await response.json();
          return { props: { id: params.id, photo } };
        }
        
        export default Content;
        `}
        </CodePane>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Live demo</Heading>
        </FlexBox>
      </Slide>
      <Slide>
      <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
        <Heading>Let's try it</Heading>
        
        <Image src="/qr.png" width="30%" />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Caveats</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>New framework</Heading>
          <UnorderedList color="secondary">
            <Appear>
              <ListItem>No stable release version until 2021. 10.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Sharp works only with Node 14.x</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/buildfail.png" width="80%" />
        </FlexBox>
        <Notes>
          <Markdown componentProps={{ fontSize: 'xx-large', color: 'white' }}>
            {`- but it can slow down the build
  - ssg will generate a prerendered HTML for each page you have
  - 100 blogposts -> 100 blog detail pages
  - having 1-2-3 requests there can increase the build time significantly
  - fetch takes time for 100 blogposts with 2-3 requests each
  - SSR slow with fetch and then render html ~1-2s for FCP
  - need to create DB layer`}
          </Markdown>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Missed 🤦‍♂️</Heading>
          <UnorderedList color="secondary">
            <Appear>
              <ListItem>Dynamic data in layout</ListItem>
            </Appear>
            <Appear>
              <ListItem>Handling subdomains</ListItem>
            </Appear>
            <Appear>
              <ListItem>Custom server turns off features</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Was it worth it?</Heading>
        <Notes>
          <Markdown componentProps={{ fontSize: 'xx-large', color: 'white' }}>
            {`- google likes this
- feels very good from a real user experience
- has a learning curve, but feels familiar
- needs refactoring, can't transition as is`}
          </Markdown>
        </Notes>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/hiringdog.jpeg" width="80%" />
        </FlexBox>
      </Slide>
    </Deck>
  );
}
export default App;
