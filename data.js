/* ============================================
   THE LITTLE GREEN BOOK — Data
   Add new advisers or categories here.
   ============================================ */

const CATEGORIES = [
  { id: 'all', label: 'All Advisers' },
  { id: 'private-doctors-surgeons', label: 'Private Doctors & Surgeons' },
  { id: 'dentists', label: 'Dentists' },
  { id: 'dermatologists', label: 'Dermatologists' },
];

const ADVISERS = [
  {
    name: 'Amarjit Raindi',
    organisation: 'The Concierge Clinic',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Amarjit Raindi is highly regarded by patients and peers across the UK. Known for a meticulous, patient-centred approach, Amarjit combines clinical excellence with genuine warmth and discretion.',
    extendedBio: 'With extensive experience in concierge-level private healthcare, Amarjit Raindi has built a distinguished reputation for delivering personalised, responsive medical care to discerning patients. Based at The Concierge Clinic, Amarjit offers a comprehensive range of private medical services, with a particular focus on preventative health and holistic wellbeing. Patients consistently praise the unhurried, attentive consultations and the reassurance that comes with truly bespoke care.',
  },
  {
    name: 'Michael Beckles',
    organisation: 'HCA Healthcare',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Michael Beckles is highly regarded by patients and peers across the UK. His commitment to clinical excellence and compassionate care sets the highest standards in private healthcare.',
    extendedBio: 'Michael Beckles brings a wealth of experience to his role at HCA Healthcare, one of the UK\'s foremost private hospital groups. His clinical expertise spans a broad range of medical specialisms, and he is particularly valued for his ability to coordinate complex care pathways with clarity and compassion. Families trust Michael for his calm, authoritative manner and his dedication to achieving the best possible outcomes.',
  },
  {
    name: 'Catrin Bevan',
    organisation: 'The London General Practice',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Catrin Bevan is highly regarded by patients and peers across the UK. She brings a thoughtful, evidence-based approach to every consultation, ensuring patients feel truly heard.',
    extendedBio: 'Catrin Bevan is a distinguished practitioner at The London General Practice, where she provides exceptional private GP services to individuals and families. Her approach blends rigorous medical expertise with a deeply personal touch, ensuring each patient receives care tailored to their unique needs. Catrin is particularly noted for her expertise in preventative health screenings and her ability to manage complex medical histories with sensitivity and precision.',
  },
  {
    name: 'Paul Ettlinger',
    organisation: 'The London General Practice',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Paul Ettlinger is highly regarded by patients and peers across the UK. His extensive experience and warm bedside manner make him a trusted adviser for families seeking premium healthcare.',
    extendedBio: 'Dr Paul Ettlinger is a highly experienced private GP and a founding partner of The London General Practice. With decades of experience in private medicine, Paul has earned a reputation as one of London\'s most trusted general practitioners. His patients value his thoroughness, his willingness to go the extra mile, and his exceptional ability to explain complex medical issues in clear, reassuring terms. Paul\'s proactive approach to health management has made him a cornerstone of family healthcare for many distinguished clients.',
  },
  {
    name: 'Jan Gerber',
    organisation: 'Paracelsus Recovery',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Jan Gerber is highly regarded by patients and peers across the UK. His innovative approach to recovery and wellbeing has transformed the lives of countless patients.',
    extendedBio: 'Jan Gerber is a visionary medical professional at Paracelsus Recovery, a world-renowned centre for holistic treatment and rehabilitation. His approach integrates cutting-edge medical science with a profound understanding of the psychological and emotional dimensions of health. Jan works with individuals and families navigating complex health challenges, providing a level of care that is both deeply personal and clinically outstanding. His reputation for discretion and compassion makes him a natural fit for The Little Green Book.',
  },
  {
    name: 'Andrew Goldberg',
    organisation: 'HCA Healthcare',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Andrew Goldberg is highly regarded by patients and peers across the UK. He is recognised for his surgical expertise and his commitment to delivering outcomes that exceed expectations.',
    extendedBio: 'Professor Andrew Goldberg is one of the UK\'s most respected surgeons, combining world-class technical skill with a genuinely compassionate approach to patient care. Based at HCA Healthcare, he specialises in complex surgical procedures and is widely published in his field. Andrew is known for taking the time to ensure patients and their families fully understand their options, and for his unwavering commitment to achieving the best possible results. His reputation extends well beyond the UK, with patients travelling internationally to seek his expertise.',
  },
  {
    name: 'Ceri Griffiths',
    organisation: 'Willow Brook Lifestyle Financial Planning',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Ceri Griffiths is highly regarded by patients and peers across the UK. Ceri\'s holistic view of health and lifestyle planning ensures every patient receives comprehensive, forward-thinking advice.',
    extendedBio: 'Ceri Griffiths brings a unique perspective to The Little Green Book, combining deep expertise in health-related advisory services with a commitment to long-term wellbeing planning. At Willow Brook Lifestyle Financial Planning, Ceri works with families to ensure that health, lifestyle, and financial considerations are aligned for the best possible quality of life. Clients value Ceri\'s ability to see the bigger picture and to provide advice that is both practical and deeply reassuring.',
  },
  {
    name: 'Mfazo Hove',
    organisation: 'Blue Fin Vision',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Mfazo Hove is highly regarded by patients and peers across the UK. His dedication to precision and patient outcomes is matched only by his genuine care for those he treats.',
    extendedBio: 'Mfazo Hove is a highly skilled medical professional at Blue Fin Vision, where he delivers outstanding care with a focus on precision and patient-centred outcomes. His clinical expertise is complemented by a warm, approachable manner that puts patients at ease from their very first consultation. Mfazo is committed to staying at the forefront of medical innovation, ensuring his patients benefit from the latest advances in treatment and technology.',
  },
  {
    name: 'Liza Osagie-Clouard',
    organisation: 'Solice Health',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Liza Osagie-Clouard is highly regarded by patients and peers across the UK. Her empathetic approach and clinical rigour make her an exceptional choice for families seeking the very best care.',
    extendedBio: 'Dr Liza Osagie-Clouard is a distinguished practitioner at Solice Health, where she provides bespoke private medical services with an emphasis on empathy, precision, and holistic wellbeing. Liza is known for her ability to build lasting, trusting relationships with her patients, many of whom have been under her care for years. Her clinical expertise spans a wide range of specialisms, and she is particularly valued for her proactive, preventative approach to health management.',
  },
  {
    name: 'Natasha Silver Bell',
    organisation: 'SilverBell Global',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Natasha Silver Bell is highly regarded by patients and peers across the UK. She is known for her global perspective on healthcare and her ability to connect patients with world-class specialists.',
    extendedBio: 'Natasha Silver Bell is the founder of SilverBell Global, a consultancy dedicated to connecting discerning clients with the finest medical professionals and health services worldwide. Her extensive network and deep understanding of the international healthcare landscape make her an invaluable resource for families seeking the very best care, wherever they are in the world. Natasha\'s personal commitment to excellence and her warm, professional manner have earned her the trust of high-net-worth families across the globe.',
  },
  {
    name: 'Randolph Willis',
    organisation: 'Clinic Les Alpes',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Randolph Willis is highly regarded by patients and peers across the UK. His experience in world-class clinical settings ensures patients receive care of the very highest calibre.',
    extendedBio: 'Randolph Willis is a senior medical professional at Clinic Les Alpes, a prestigious Swiss clinic renowned for its exceptional standards of care. With a career spanning both the UK and international settings, Randolph brings a breadth of experience and a refined clinical approach to every patient interaction. He is particularly skilled at managing complex health needs with discretion and sensitivity, making him a trusted choice for families who expect nothing but the best.',
  },
  {
    name: 'Hugo Henderson',
    organisation: 'The London Clinic',
    category: 'private-doctors-surgeons',
    specialty: 'Private Doctors & Surgeons',
    bio: 'A leading specialist in private medicine, Hugo Henderson is highly regarded by patients and peers across the UK. His reputation for excellence and his dedication to patient welfare make him a standout in private healthcare.',
    extendedBio: 'Hugo Henderson is a highly respected practitioner at The London Clinic, one of the UK\'s most prestigious private hospitals. His clinical expertise and unwavering commitment to patient care have earned him a loyal following among discerning patients and their families. Hugo is known for his thorough, unhurried approach to consultations and his exceptional ability to coordinate multidisciplinary care. Whether managing a routine health concern or navigating a complex medical challenge, Hugo brings the same dedication and attention to detail to every case.',
  },
];
