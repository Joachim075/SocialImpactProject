import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function ProfileCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className='sm:w-[4%]:h-[30%] md:w-[4%]:h-[50%] lg:w-[8%]:h-[70%] xl:w-[12%] xl:h-[100%] sm:w-[16%]:h-[150%]'>
      <Card.Section>
        <Image
          src="./public/Pictures/tablet-login/icon-park-outline_woman.svg"
          height={110} className='sm:h-10 md:h-24 lg:h-48 2xl:h-64  xl:h-36 w-fit'
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs" className='flex-row'>
        <Text fw={500}>Dr.John Doe</Text><br />
        <button color="pink" variant="light">
        <i className="fa-solid fa-phone"></i>
        </button>
        <button color="pink" variant="light">
        <i className="fa-solid fa-video"></i>
        </button>
        <button color="pink" variant="light">
        <i class="fa-solid fa-message"></i>
        </button>
      </Group>
    </Card>
  );
}


export default ProfileCard;